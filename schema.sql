CREATE TABLE IF NOT EXISTS accounts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS accounts_email_lower_idx ON accounts (LOWER(email));

CREATE TABLE IF NOT EXISTS auth_sessions (
    token_hash CHAR(64) PRIMARY KEY,
    account_id BIGINT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS auth_sessions_expiry_idx ON auth_sessions(expires_at);

CREATE TABLE IF NOT EXISTS students (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    account_id BIGINT REFERENCES accounts(id) ON DELETE SET NULL,
    full_name TEXT,
    preferred_name TEXT,
    age SMALLINT CHECK (age IS NULL OR age BETWEEN 13 AND 99),
    date_of_birth DATE,
    gender TEXT,
    email TEXT,
    phone TEXT,
    city TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE students
    ADD COLUMN IF NOT EXISTS account_id BIGINT REFERENCES accounts(id) ON DELETE SET NULL;

CREATE UNIQUE INDEX IF NOT EXISTS students_account_id_unique_idx ON students(account_id);

CREATE TABLE IF NOT EXISTS education (
    student_id BIGINT PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    school TEXT,
    course TEXT,
    department TEXT,
    current_year TEXT,
    current_semester TEXT,
    campus_student_id TEXT,
    grade TEXT
);

CREATE TABLE IF NOT EXISTS academic_profile (
    student_id BIGINT PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    favorite_subjects TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    difficult_subject TEXT,
    studying_subjects TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    study_hours TEXT,
    learning_methods TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    academic_confidence SMALLINT CHECK (academic_confidence IS NULL OR academic_confidence BETWEEN 1 AND 5)
);

CREATE TABLE IF NOT EXISTS technical_profile (
    student_id BIGINT PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    programming_languages TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    technical_skills TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    strongest_skill TEXT,
    next_technology TEXT,
    skill_level TEXT
);

CREATE TABLE IF NOT EXISTS activities (
    student_id BIGINT PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    clubs TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    hackathons BOOLEAN,
    workshops BOOLEAN,
    competitions BOOLEAN
);

CREATE TABLE IF NOT EXISTS certifications (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    name TEXT,
    organization TEXT,
    year SMALLINT
);

CREATE TABLE IF NOT EXISTS achievements (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    title TEXT,
    type TEXT,
    year SMALLINT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS interests (
    student_id BIGINT PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    hobbies TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    interest_area TEXT,
    career_fields TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[]
);

CREATE TABLE IF NOT EXISTS future_goals (
    student_id BIGINT PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    career TEXT,
    goal_skill TEXT,
    two_year_goal TEXT,
    organization TEXT,
    self_improvement TEXT
);

CREATE INDEX IF NOT EXISTS certifications_student_id_idx ON certifications(student_id);
CREATE INDEX IF NOT EXISTS achievements_student_id_idx ON achievements(student_id);

CREATE OR REPLACE VIEW student_profile_overview AS
SELECT
    s.id,
    s.full_name,
    s.preferred_name,
    s.age,
    s.city,
    s.email,
    s.created_at,
    e.school,
    e.course,
    e.department,
    e.current_year,
    e.current_semester,
    t.programming_languages,
    t.technical_skills,
    i.hobbies,
    i.interest_area,
    g.career,
    g.organization,
    s.account_id,
    s.date_of_birth,
    s.gender,
    s.phone,
    e.campus_student_id,
    e.grade,
    ac.favorite_subjects,
    ac.difficult_subject,
    ac.studying_subjects,
    ac.study_hours,
    ac.learning_methods,
    ac.academic_confidence,
    t.strongest_skill,
    t.next_technology,
    t.skill_level,
    a.clubs,
    a.hackathons,
    a.workshops,
    a.competitions,
    i.career_fields,
    g.goal_skill,
    g.two_year_goal,
    g.self_improvement,
    COALESCE((
        SELECT jsonb_agg(jsonb_build_object('name', c.name, 'organization', c.organization, 'year', c.year) ORDER BY c.id)
        FROM certifications AS c WHERE c.student_id = s.id
    ), '[]'::jsonb) AS certifications,
    COALESCE((
        SELECT jsonb_agg(jsonb_build_object('title', ach.title, 'type', ach.type, 'year', ach.year,
                                            'description', ach.description) ORDER BY ach.id)
        FROM achievements AS ach WHERE ach.student_id = s.id
    ), '[]'::jsonb) AS achievements
FROM students AS s
LEFT JOIN education AS e ON e.student_id = s.id
LEFT JOIN academic_profile AS ac ON ac.student_id = s.id
LEFT JOIN technical_profile AS t ON t.student_id = s.id
LEFT JOIN activities AS a ON a.student_id = s.id
LEFT JOIN interests AS i ON i.student_id = s.id
LEFT JOIN future_goals AS g ON g.student_id = s.id;
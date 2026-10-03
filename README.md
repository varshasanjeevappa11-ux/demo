# Student Profile Portal

The first screen offers account creation and login. Create an account once with an email and a password of at least 12 characters; later visits can log in with those same credentials. Passwords are stored as salted scrypt hashes, and the browser receives an HTTP-only session cookie. The API listens only on `127.0.0.1`; use fictional student information for this demonstration.

## Set up PostgreSQL in pgAdmin

1. Connect pgAdmin to your local PostgreSQL server. The default address is `127.0.0.1:5432`.
2. Create a database named `student_profiles`, or choose another name.
3. Open that database's Query Tool, open `schema.sql`, and execute it. This creates or updates the account, session, profile tables, and full-profile overview. Rerun it after schema changes; existing profile rows are preserved.
4. Copy `.env.example` to `.env`. Replace `change_me` with your PostgreSQL password and update the database name in `DATABASE_URL` if needed. Keep `.env` private; it is ignored by Git.

## Run the portal

```powershell
python -m pip install -r requirements.txt
python server.py
```

Open <http://localhost:8000>, choose **Create an account**, and then complete the profile. On later visits, log in with the same email and password; the saved profile loads for that account, and edits update the existing student record. Existing profiles can be linked when the account is created with the same email address.

After each profile is saved to PostgreSQL, the app updates both a per-student workbook and `exports/all_student_profiles.xlsx`. The all-students workbook includes every completed profile in category sheets and keeps certifications and achievements in separate rows/sheets. Open `exports/all_student_profiles.xlsx` in Excel to see everyone together; no email-by-email lookup is needed. These generated files are ignored by Git and do not include account passwords or session data.

Check the connection at <http://localhost:8000/api/health>; it returns `{"status":"connected"}` when PostgreSQL is reachable.

## Inspect saved profiles in pgAdmin

```sql
SELECT * FROM student_profile_overview ORDER BY created_at DESC;
SELECT * FROM certifications ORDER BY student_id, id;
SELECT * FROM achievements ORDER BY student_id, id;
```

If PostgreSQL is unavailable, the completion screen reports that the profile was not saved and offers retry or continue-without-saving. It never silently claims success.

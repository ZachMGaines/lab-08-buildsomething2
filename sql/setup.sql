DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  account_id TEXT NOT NULL
)
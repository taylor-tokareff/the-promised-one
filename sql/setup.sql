DROP TABLE IF EXISTS beers;


CREATE TABLE beers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  abv TEXT NOT NULL,
  color TEXT
)
import pool from '../utils/pool';

class Noodle {
  id;
  name;
  region;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.region = row.region;
  }

  static async insert({ name, region }) {
    const { rows } = await pool.query(
      'INSERT INTO noodles (name, region) VALUES ($1, $2) RETURNING *', [name, region]
    );

    return new Noodle(rows[0]);

  }






}

export default Noodle;

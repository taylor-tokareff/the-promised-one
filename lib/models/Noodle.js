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

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT *
    FROM noodles
    WHERE id = $1
  `, [id]);
    if (!rows[0]) return null;

    return new Noodle(rows[0]);

  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * from noodles
    `);
    return rows.map(row => new Noodle(row));
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM noodles
      WHERE id = $1
      RETURNING *`,
      [id]
    );
    return new Noodle(rows[0]);
  }





}

export default Noodle;

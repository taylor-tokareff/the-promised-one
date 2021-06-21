import pool from '../utils/pool';

class Band {
  id;
  name;
  home;


  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.home = row.home;
  }

  static async insert({ name, home }) {
    const { rows } = await pool.query(
      'INSERT INTO bands (name, home) VALUES ($1, $2) RETURNING *', [name, home]
    );

    return new Band(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT *
    FROM bands
    WHERE id = $1
  `, [id]);
    if (!rows[0]) return null;

    return new Band(rows[0]);

  }








}

export default Band;

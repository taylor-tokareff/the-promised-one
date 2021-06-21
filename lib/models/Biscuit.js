import pool from '../utils/pool';

class Biscuit {
  id;
  flour;
  sauce;


  constructor(row) {
    this.id = row.id;
    this.flour = row.flour;
    this.sauce = row.sauce;
  }

  static async insert({ flour, sauce }) {
    const { rows } = await pool.query(
      'INSERT INTO biscuits (flour, sauce) VALUES ($1, $2) RETURNING *', [flour, sauce]
    );

    return new Biscuit(rows[0]);

  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT *
    FROM biscuits
    WHERE id = $1
  `, [id]);
    if (!rows[0]) return null;

    return new Biscuit(rows[0]);

  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * from biscuits
    `);
    return rows.map(row => new Biscuit(row));
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM biscuits
      WHERE id = $1
      RETURNING *`,
      [id]
    );
    return new Biscuit(rows[0]);
  }

  static async update(biscuit, id) {
    const { rows } = await pool.query(
      `UPDATE biscuits
      SET flour = $1, sauce = $2
      WHERE id = $3
      RETURNING *`,
      [biscuit.flour, biscuit.sauce, id]
    );
    return new Biscuit(rows[0]);
  }



}

export default Biscuit;

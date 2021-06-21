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






}

export default Biscuit;

import pool from '../utils/pool';

class Tree {
  id;
  type;
  age;


  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.age = row.age;
  }

  static async insert({ type, age }) {
    const { rows } = await pool.query(
      'INSERT INTO trees (type, age) VALUES ($1, $2) RETURNING *', [type, age]
    );

    return new Tree(rows[0]);

  }





}

export default Tree;

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

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT *
    FROM trees
    WHERE id = $1
  `, [id]);
    if (!rows[0]) return null;

    return new Tree(rows[0]);

  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * from trees
    `);
    return rows.map(row => new Tree(row));
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM trees
      WHERE id = $1
      RETURNING *`,
      [id]
    );
    return new Tree(rows[0]);
  }

  static async update(tree, id) {
    const { rows } = await pool.query(
      `UPDATE trees
      SET type = $1, age = $2
      WHERE id = $3
      RETURNING *`,
      [tree.type, tree.age, id]
    );
    return new Tree(rows[0]);
  }


}

export default Tree;

import pool from "../config/db";

export async function getAllProducts(search = '') {
    const [rows] = await pool.query(
        'SELECT * FROM products'
    )
    return rows
}

export async function getProductById(id) {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id])
    return rows[0]
}
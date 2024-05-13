import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { eliminarUsuario } from '../store/UserReducer';
import { useDispatch } from 'react-redux';


export const Home = () => {
    const usuarios = useSelector((state) => state.usuarios);
    const dispatch = useDispatch();

    console.log(usuarios)

    const handleDeleteClick = (id) => {
        dispatch(eliminarUsuario(id))
    }
  return (
    <div className='container'>
        <h2>Mantenedor con Redux</h2>
        <Link to="/agregar" className='btn btn-success my-3'>Agregar</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Fono</th>
                    <th>Accion</th>
                </tr>
            </thead>
    
        <tbody>
{usuarios.map(({id, nombre, email, fono},i) => (
<tr key={i}>
    <td>{id}</td>
    <td>{nombre}</td>
    <td>{email}</td>
    <td>{fono}</td>
    <td>
        <Link to={`/actualizar/${id}`} className='btn btn-sm btn-warning'>Actualizar</Link>
        <button onClick={() => handleDeleteClick({id})}className='btn btn-sm btn-danger'>Eliminar</button>
    </td>
</tr>
))}
        </tbody>
        </table>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actualizarUsuario } from '../store/UserReducer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const Actualizar = () => {

    const usuarios = useSelector((state) => state.usuarios)
    const {id} = useParams();

    console.log('id', id)
    const usuarioEdicion = usuarios.filter((x) => x.id == id);

    console.log('usuarioEdicion', usuarioEdicion[0])

    const [nombre, setNombre] = useState(usuarioEdicion[0].nombre)
    const [email, setEmail] = useState(usuarioEdicion[0].email)
    const [fono, setFono] = useState(usuarioEdicion[0].fono)
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onHandleSubmit = (evt) => {
        evt.preventDefault()
        dispatch(actualizarUsuario({id, nombre, email, fono }))
        navigate("/")
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Actualizar Usuario</h3>
                <form onSubmit={onHandleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre: </label>
                        <input onChange={(evt) => setNombre(evt.target.value)} type="text" name='name' className='form-control' value={nombre} placeholder='Ingrese nombre' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input onChange={(evt) => setEmail(evt.target.value)} type='email' name='email' className='form-control' value={email} placeholder='Ingrese email' />
                    </div>
                    <div>
                        <label htmlFor='fono'>Fono:</label>
                        <input onChange={(evt) => setFono(evt.target.value)} type='text' name='fono' className='form-control' value={fono} placeholder='Ingrese fono' />
                    </div>
                    <br />
                    <button className='btn btn-info'>Guardar</button>
                </form>
            </div>
        </div>
    )
}
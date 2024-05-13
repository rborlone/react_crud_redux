import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { agregarUsuario } from '../store/UserReducer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const Agregar = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [fono, setFono] = useState('')
    const usuarios = useSelector((state) => state.usuarios)
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onHandleChange = ({target}) => {
        
    } 

    const onHandleSubmit = (evt) => {
        evt.preventDefault()

        let idNew = (usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1);
        
        console.log('idNew', idNew)

        dispatch(agregarUsuario({"id": idNew, nombre, email, fono }))
        navigate("/")
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Agregar Usuario</h3>
                <form onSubmit={onHandleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={(evt) => setNombre(evt.target.value)} type="text" name='name' className='form-control' placeholder='Ingrese nombre' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input onChange={(evt) => setEmail(evt.target.value)} type='email' name='email' className='form-control' placeholder='Ingrese email' />
                    </div>
                    <div>
                        <label htmlFor='fono'>Fono:</label>
                        <input onChange={(evt) => setFono(evt.target.value)} type='text' name='fono' className='form-control' placeholder='Ingrese fono' />
                    </div>
                    <br />
                    <button className='btn btn-info'>Guardar</button>
                </form>
            </div>
        </div>
    )
}

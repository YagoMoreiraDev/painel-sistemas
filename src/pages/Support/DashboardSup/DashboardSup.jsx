import { Link } from 'react-router-dom';
import './style.css';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';

export default function DashboardSup() {
    return (
        <>
            <div className='main-content'>
                <div className='content-title'>
                    <FiMessageSquare size={30}/>
                    <h2>Atendimentos</h2>
                </div>
                <Link className='button-new'>
                    <FiPlus size={25}/>
                    Novo Chamado
                </Link>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Usuario</th>
                            <th scope='col'>Assunto</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Cadastrado em</th>
                            <th scope='col'>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td data-label='Usuario'>Yago Moreira</td>
                        <td data-label='Assunto'>Reinicialização do Sistema</td>
                        <td data-label='Status'>
                            <span className='badge' style={{backgroundColor: '#999'}}>
                                Em aberto
                            </span>
                        </td>
                        <td data-label='Cadastrado'>31/07/2024</td>
                        <td data-label='#'>
                            <button className='button-action' style={{backgroundColor: '#3583f6'}}>
                                <FiSearch color='#FFF' size={17}/>
                            </button>
                            <button className='button-action' style={{backgroundColor: '#f6a935'}}>
                                <FiEdit2 color='#FFF' size={17}/>
                            </button>
                        </td>
                    </tbody>

                    <tbody>
                        <td data-label='Usuario'>Yago Moreira</td>
                        <td data-label='Assunto'>Reinicialização do Sistema</td>
                        <td data-label='Status'>
                            <span className='badge' style={{backgroundColor: '#999'}}>
                                Em aberto
                            </span>
                        </td>
                        <td data-label='Cadastrado'>31/07/2024</td>
                        <td data-label='#'>
                            <button className='button-action' style={{backgroundColor: '#3583f6'}}>
                                <FiSearch color='#FFF' size={17}/>
                            </button>
                            <button className='button-action' style={{backgroundColor: '#f6a935'}}>
                                <FiEdit2 color='#FFF' size={17}/>
                            </button>
                        </td>
                    </tbody>
                </table>
            </div>
        </>
    );
}
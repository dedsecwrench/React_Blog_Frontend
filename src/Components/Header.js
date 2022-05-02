import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='head1'> The </div>
        <div className='head2'> Siren </div>
        <br/>
        <nav className="container navbar navbar-expand">
              <table className="navbar-nav">
                <tr>
                <td className="nav-item">
                  <Link to='/home' className="nav-link" aria-current="page">
                   <button className='buttonz btn-4'><span>Home</span></button></Link>
                </td>
                <td className="nav-item">
                  <Link to='/bollywood' className="nav-link" aria-current="page">
                  <button className='buttonz btn-4'><span>Bollywood</span></button></Link>
                </td>
                <td className="nav-item">
                  <Link to='/technology' className="nav-link" aria-current="page">
                  <button className='buttonz btn-4'><span>Technology</span></button></Link>
                </td>
                <td className="nav-item">
                  <Link to='/hollywood' className="nav-link" aria-current="page">
                  <button className='buttonz btn-4'><span>Hollywood</span></button></Link>
                </td>
                <td className="nav-item">
                  <Link to='/fitness' className="nav-link" aria-current="page">
                  <button className='buttonz btn-4'><span>Fitness</span></button></Link>
                </td>
                <td className="nav-item">
                  <Link to='/food' className="nav-link" aria-current="page">
                  <button className='buttonz btn-4'><span>Food</span></button></Link>
                </td>
                </tr>
              </table>
          </nav>
          <div className='line'> </div>

    </div>
  )
}

export default Header
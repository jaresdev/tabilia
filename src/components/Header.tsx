import logo from '../assets/Logotipo.svg'

function Header() {
  return (
    <header className="flex justify-start items-center w-auto py-10 px-16 gap-6">
      <img src={logo} alt="Tabilia logo" className="h-20 w-auto" />
      <span className='text-6xl font-semibold'>Tabilia</span>
    </header>
  )
}

export default Header

const Nav = () => {
  return (
    <div className='sticky top-0 h-10 flex flex-row items-center justify-between w-full text-white bg-blue-900 text-xs'>
        <div><img src='./ogi-logo.png' alt='ogi-logo' className='w-12 h-8 border-1 rounded-full border border-solid border-orange-500 mt-1'/></div>
        <div className='font-extrabold'>Hydocarbon Volume Calculator</div>
        <div className='hidden'>Login</div>
        <div>Logout</div>
        <div><u>User</u></div>
    </div>
  )
}

export default Nav;
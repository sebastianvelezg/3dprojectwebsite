// import fs from 'fs';

// const pagesDir = '@/app'; // Ruta relativa al directorio principal de tu proyecto
// const folders = fs.readdirSync(pagesDir, { withFileTypes: true })
//   .filter(item => item.isDirectory())
//   .map(item => item.name);

console.log(folders)
const SideBar = () => {
  return (
    <nav>
      <h1>Hello Navbar</h1>
    </nav>
  );
};

export default SideBar;

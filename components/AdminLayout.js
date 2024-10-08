import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="flex">
     
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-2xl mb-4">Admin Panel</h2>
        <nav className="space-y-2">
          <Link href="/admin" className={`block p-2 rounded ${pathname === '/admin' ? 'bg-gray-700' : ''}`}>
            Dashboard
          </Link>
          <Link href="/admin/products" className={`block p-2 rounded ${pathname === '/admin/products' ? 'bg-gray-700' : ''}`}>
            Products
          </Link>
          <Link href="/admin/users" className={`block p-2 rounded ${pathname === '/admin/users' ? 'bg-gray-700' : ''}`}>
            Users
          </Link>
        </nav>
      </aside>

      
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default AdminLayout;

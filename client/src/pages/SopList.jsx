import React , { useState, useEffect } from 'react'
import api from '../api/axios.js';
import Header from '../components/Header'
import {
  CircleAlert,
  Clock,
  File,
  Forward,
  Home,
  LayoutTemplateIcon,
  Search,
  Star,
  Trash,
  Users
} from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const SopList = () => {

  const navigate = useNavigate();

const [sops, setSops] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState('');

useEffect(() => {
    const fetchSops = async () => {
        try {
            const res = await api.get('/sops');
            setSops(res.data.sops);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    fetchSops();
}, []);

const handleDelete = async (id) => {
    try {
        await api.delete(`/sops/${id}`);
        setSops(sops.filter(sop => sop._id !== id));
    } catch (err) {
        console.error(err);
    }
};

const handleDownload = async (sop) => {
    try {
        const response = await api.get(`/sops/${sop._id}/export/pdf`, {
            responseType: 'blob'
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${sop.title}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (err) {
        console.error(err);
    }
};

const filteredSops = sops.filter(sop =>
    sop.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-200 via-white to-purple-50'>
      <Header />
      <div className='flex'>
        {/* navbar */}
        <div className='w-1/5 ml-5'>

          <h1 className='mt-10 text-gray-700 font-bold'>WORKSPACE</h1>
          <div className=''>

            <Link
              to="/dashboard"
              className="
              flex items-center gap-3
              px-4 py-3 m-1
              text-gray-600 font-medium
              rounded-xl
              hover:bg-purple-200
              hover:text-purple-700
              transition-all duration-300  
            "
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/sop"
              className="
              flex items-center gap-3
              px-4 py-3 m-1
              text-gray-600 font-medium
              rounded-xl
              hover:bg-purple-200
              hover:text-purple-700
              transition-all duration-300  
            "
            >
              <File size={20} />
              <span>All Sops</span>
            </Link>

            <Link
              to="/templates"
              className="
              flex items-center gap-3
              px-4 py-3 m-1
              text-gray-600 font-medium
              rounded-xl
              hover:bg-purple-200
              hover:text-purple-700
              transition-all duration-300  
            "
            >
              <LayoutTemplateIcon size={20} />
              <span>Templates</span>
            </Link>

            <Link
              to="/share"
              className="
              flex items-center gap-3
              px-4 py-3 m-1
              text-gray-600 font-medium
              rounded-xl
              hover:bg-purple-200
              hover:text-purple-700
              transition-all duration-300  
            "
            >
              <Forward size={20} />
              <span>Share</span>
            </Link>

            <Link
              to="/trash"
              className="
              flex items-center gap-3
              px-4 py-3 m-1
              text-gray-600 font-medium
              rounded-xl
              hover:bg-purple-200
              hover:text-purple-700
              transition-all duration-300  
            "
            >
              <Trash size={20} />
              <span>Trash</span>
            </Link>

            <Link
              to="/contact"
              className="
              flex items-center gap-3
              px-4 py-3 m-1
              text-gray-600 font-medium
              rounded-xl
              hover:bg-purple-200
              hover:text-purple-700
              transition-all duration-300  
            "
            >
              <CircleAlert size={20} />
              <span>Issue</span>
            </Link>




          </div>

        </div>

        {/* main */}
        <div className="w-4/5 p-8">
          <div className='flex '>

            {/* text */}
            <p className="text-3xl font-bold text-gray-800">
              All SOPs
              <p className="text-gray-600 text-sm mt-2">
                View and manage all Standard Operating Procedures across your workspace
              </p>
            </p>

            <div className="flex items-center gap-3 ">
              {/* Search Input */}
              <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 w-80 shadow-sm focus-within:ring-2 focus-within:ring-purple-400 focus-within:border-purple-400 transition">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search SOPs..."
                  className="w-full ml-3 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Search Button */}
              <button
                className="
                px-5 py-2
                bg-purple-600
                text-white
                font-medium
                rounded-xl
                hover:bg-purple-700
                transition-all
                duration-300  
                shadow-sm
              "
              >
                Search
              </button>
            </div>


          </div>
          <div className="mt-4 flex gap-2">

            <button
              className="
                flex items-center gap-4
                bg-white
                p-5
                rounded-xl
                shadow-sm
                border border-gray-200
                hover:shadow-md
                hover:border-purple-300
                transition-all duration-300
                w-64
              "
            >
              <div className="p-3 bg-purple-100 rounded-lg">
                <File size={24} className="text-purple-700" />
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800">{sops.length}</h2>
                <p className="text-sm text-gray-500">Total SOPs</p>
              </div>
            </button>

             <button
              className="
                flex items-center gap-4
                bg-white
                p-5
                rounded-xl
                shadow-sm
                border border-gray-200
                hover:shadow-md
                hover:border-purple-300
                transition-all duration-300
                w-64
              "
            >
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users size={24} className="text-purple-700" />
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800">5</h2>
                <p className="text-sm text-gray-500">Workspaces</p>
              </div>
            </button>

             <button
              className="
                flex items-center gap-4
                bg-white
                p-5
                rounded-xl
                shadow-sm
                border border-gray-200
                hover:shadow-md
                hover:border-purple-300
                transition-all duration-300
                w-64
              "
            >
              <div className="p-3 bg-purple-100 rounded-lg">
                <Star size={24} className="text-purple-700" />
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800">32</h2>
                <p className="text-sm text-gray-500">Favorite</p>
              </div>
            </button>

             <button
              className="
                flex items-center gap-4
                bg-white
                p-5
                rounded-xl
                shadow-sm
                border border-gray-200
                hover:shadow-md
                hover:border-purple-300
                transition-all duration-300
                w-64
              "
            >
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock size={24} className="text-purple-700" />
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800">32</h2>
                <p className="text-sm text-gray-500">Updated This week</p>
              </div>
            </button>

          </div>
          <div className="mt-6 grid grid-cols-1 gap-4">
    {loading && <p className="text-gray-500">Loading SOPs...</p>}
    
    {!loading && filteredSops.length === 0 && (
        <p className="text-gray-500">No SOPs found. Generate your first one!</p>
    )}

    {filteredSops.map((sop) => (
        <div key={sop._id} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between hover:shadow-md transition-all">
            <div>
                <h3 className="font-semibold text-gray-800">{sop.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                    {sop.structuredSteps.length} steps · {new Date(sop.createdAt).toLocaleDateString()}
                </p>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => handleDownload(sop)}
                    className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 transition"
                >
                    Download
                </button>
                <button
                    onClick={() => handleDelete(sop._id)}
                    className="px-3 py-2 bg-red-100 text-red-600 rounded-lg text-sm hover:bg-red-200 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    ))}
</div>
          <div>
            
          </div>
        </div>



      </div>
    </div>
  )
}

export default SopList
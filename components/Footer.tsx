import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img className="h-12 w-auto filter invert" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAADw8PDf39/b29v6+vrk5OTW1tZ6enqdnZ3FxcXNzc0xMTGlpaVQUFCKiopubm6rq6tHR0eysrIXFxc5OTkPDw+BgYEWFhZISEg/Pz9dXV1bW1uLi4shISHp6ekMDAwzMzMqKiqAgIB+Ph2RAAADLUlEQVR4nO2d23aiMBBA0wmyKAoqKjhQxVH3/591Yk2aJp2klDPzu+c558zOJJNdd90MAAAAAAAAAAAAAAAAAAAAAAAAAPjftH/S/r/ZfZnS3e21+3K2u3PVSz9W4k838b1f7e7Wct+p/Vp+fVufp9s/0u3u1nK/qf2a24m42z/L2e1uLfd3aj813/b/jLq7tfz+G7U/w/b/Y9ndrWX8U/sztf/i3u1uLcd3aj+T9n94N56r291ayk9qf5b2f2d9u9tdWs5Ptf3c8t/X6YtU/a9f93czpdtf/X64W8sXtf2c2/9e9W/5tX/5v6nZ/2X/t3e7208573b9j+72E3q7r8P5P/J3P5Vf+3f9u9tL+b/F/21l++pG7w6+pnb/lf878W53P7XuJ3b3N5vtp/X/Qvj/i97u22A+qf2d+b/J/8e92z3E/u/J/9X+p/L/v0q3u4dYH6r9mf6v8n9v89PdQywe1f5M/6/y//3S7e6x8L+n/L9+7w7n/xfvdrfHwv+c/L96t7uf2z9wdrubw/oPa3d/uYc3e7mH+j9bu/tL/a/e7e4n9n/73s3uff43d7u7n9r//pX/X7jb3U/t//o3d7t7q/2H3u3uZ/Yfe7e7x8D/3L3dPRb+5+5291j4n7vb3Qv3/3u3u5faf+bd7j4J/3u3u/t88R+6293/t/3e/7sAAAAAAAAAAAAAAPsC/f/D7wz8/8fvDL0z/B6/M/z+0LsD7yT8PnfXp/tL7A68p+l+Fbsj78/0p7t9J96b8G6a/1Qf/5S+C+/19J9+X/3a3M134v2S/n/r0+3u/eS9t8n/2f7v7v7u/c/7H4v/V/+3+7+7e15/t/v/7+5+73b3x/pfs/vfu7s9lP8/+r/e3e7+GP+X3e3uH6X/o3u7+4/t7vbubvb+/u3uHvL+x93d7c39u93dzR7+/u7uPvL+zu5ud3N/9+/u7h7+/k93Nzf3d3d3l/d/dne7ufvbu7u7z/u/u7vLvX/Q3e5+7d/t7h6T9392d3v3/tPu7h7S/g92tzv3/qPu7h7Q/g93d3d3/6+72z3E/f/Z3e1e/b+zu9s9pP0f7O727v1Pu7vdA9r/wd3t3fs/urvbA9r/4e52d/f+ru5ud4/J/0d3tzu7+z+7u909p/8f7m53d/efdre7R7z/g7vb3d39p93tHvD+D3e3u7v7P7u73QPc/8Hu9v79/93d7R7w/g93tzv8P+j+j+e9f/kPz0v6P7z7b/p/d/e2AAAAAAAAAAAAAAAAAAAAAAAA8F/5B309U/b4vIbiAAAAAElFTkSuQmCC" alt="OIA Agency Logo" />
                        <p className="mt-2 text-gray-400">
                            Crafting Digital Excellence.
                            <br />
                            Alexandria, Egypt.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/#/services" className="text-gray-400 hover:text-white hover:underline transition-colors">Services</a></li>
                            <li><a href="/#/products" className="text-gray-400 hover:text-white hover:underline transition-colors">Products</a></li>
                            <li><a href="/#/clients" className="text-gray-400 hover:text-white hover:underline transition-colors">Clients</a></li>
                            <li><a href="/#/contact" className="text-gray-400 hover:text-white hover:underline transition-colors">Contact Us</a></li>
                            <li><Link to="/admin" className="text-gray-400 hover:text-white hover:underline transition-colors">Admin Panel</Link></li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-semibold tracking-wider uppercase">Connect</h4>
                         <div className="mt-4 flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                         </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>© 2025 OIA. All rights reserved. C.R 11816</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
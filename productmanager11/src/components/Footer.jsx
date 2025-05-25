import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 px-6 py-8 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Logo + Mô tả */}
                <div>
                    <h2 className="text-xl font-bold text-blue-600 mb-2">MyShop</h2>
                    <p className="text-sm">Cửa hàng trực tuyến với những sản phẩm tốt nhất cho bạn.</p>
                </div>

                {/* Liên kết */}
                <div className="flex flex-col space-y-2">
                    <a href="#" className="hover:text-blue-600">Giới thiệu</a>
                    <a href="#" className="hover:text-blue-600">Chính sách bảo mật</a>
                    <a href="#" className="hover:text-blue-600">Điều khoản dịch vụ</a>
                    <a href="#" className="hover:text-blue-600">Liên hệ</a>
                </div>

                {/* Mạng xã hội */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-600">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8 border-t pt-4">
                © 2025 MyShop. All rights reserved.
            </div>
        </footer>
    );
}

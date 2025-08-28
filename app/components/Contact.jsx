export default (first) => {
    return (
        <div className=" flex flex-col items-center justify-center px-6">
            <div className="max-w-md w-full p-4">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
                <p className="text-center mb-7">
                    Open to new opportunities, collaborations, and projects. Whether it’s a full-time role or freelance work, feel free to reach out.
                </p>

                {/* Contact Form */}
                <form className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder=""
                            className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Write your message..."
                            className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black/80 text-white font-medium py-3 rounded-lg hover:bg-black transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Extra Contact Info */}

            </div>
        </div>
    )
}
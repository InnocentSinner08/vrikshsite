import React from 'react';

const ReachUsBody = () => {
    return (
        <div className="w-full bg-gradient-to-b from-green-100 to-gray-200 p-8">

            {/* Responsive Flexbox/Grid */}
            <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-8">

                {/* Contact Info Section */}
                <div>
                    <div className="bg-white p-4 rounded shadow mb-6">
                        <h3 className="font-bold text-lg mb-2">For all general Queries</h3>
                        <p className="italic text-gray-600">Email : info@vrikshbethechange.org</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-bold text-lg mb-2">Visit Us Here</h3>
                        <p className="italic text-gray-600">Address: Manpur Patwatoli Gaya,
                            Bihar, India, 823003
                        </p>
                    </div>
                </div>

                {/* Helpdesk Form */}
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="font-bold text-center text-lg mb-4">Helpdesk</h3>
                    <p className="text-center mb-6 text-gray-700">
                        For any grievance, suggestion kindly write to us
                    </p>
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                        <input
                            type="hidden"
                            name="access_key"
                            value="c5a33988-58dd-461e-a9c0-61b07a71c8a8"
                        />

                        {/* Name */}
                        <div>
                            <label className="block font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border p-2 rounded"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Phone and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-1">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="w-full border p-2 rounded"
                                    placeholder="Phone number"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border p-2 rounded"
                                    placeholder="Email address"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block font-semibold mb-1">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                className="w-full border p-2 rounded"
                                placeholder="Write your message here"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ReachUsBody;

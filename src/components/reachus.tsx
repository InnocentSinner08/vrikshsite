import React from 'react';

const ReachUsBody = () => {
    return (
        <div className="w-full bg-gradient-to-b from-green-100 to-gray-200 p-8">

            <div className="container mx-auto grid grid-cols-2 gap-8">

                <div>
                    <div className="bg-white p-4 rounded shadow mb-6">
                        <h3 className="font-bold text-lg mb-2">For all general Queries</h3>
                        <p className="italic text-gray-600">email</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-bold text-lg mb-2">Visit Us Here</h3>
                        <p className="italic text-gray-600">address:</p>
                    </div>
                </div>


                <div className="bg-white p-6 rounded shadow">
                    <h3 className="font-bold text-center text-lg mb-4">Helpdesk</h3>
                    <p className="text-center mb-6 text-gray-700">
                        For any grievance, suggestion kindly write to us
                    </p>
                    <form className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-1">Phone</label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded"
                                    placeholder="Phone number"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border p-2 rounded"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Message</label>
                            <textarea
                                rows={4}
                                className="w-full border p-2 rounded"
                                placeholder="Write your message here"
                            />
                        </div>

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

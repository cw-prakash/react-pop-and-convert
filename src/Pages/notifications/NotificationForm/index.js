import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import { useState } from 'react'

import { Icon } from "../../../components";
import Content from "./Content";

const tabs = [
    { label: 'Content', content: Content, icon: <Icon icon="article" /> },
    { label: 'Settings', content: Content, icon: <Icon icon="article" /> },
]

export default function NotificationForm({ notification }) {

    const [activeTab, setActiveTab] = useState(0)

    const { id, title } = notification || {}

    const navigate = useNavigate()

    const Content = tabs[activeTab].content

    return (
        <Form method="post">
            <div className="flex flex-col gap-6 max-w-7xl mx-auto p-6">
                <div className="flex justify-between align-center">
                    <button type="button" className="flex" to="/notifications" onClick={() => navigate(-1)}>
                        <Icon icon="double-arrow-left" /> Back
                    </button>
                    <div className="flex gap-4">
                        {
                            id ? <button
                                className="px-6 py-3 bg-blue-500 rounded text-white"
                                type="submit"
                            >Update</button> : <>
                                <button
                                    className="px-6 border-blue-500 border py-3 rounded text-blue-500"
                                    type="submit"
                                >
                                    Save as Draft
                                </button>
                                <button
                                    className="px-6 py-3 bg-blue-500 rounded text-white"
                                    type="submit"
                                >
                                    Publish
                                </button>
                            </>
                        }
                    </div>
                </div>
                <div>
                    <input
                        name="title"
                        type="text"
                        className="shadow-md w-full border rounded py-2.5 px-3.5"
                        placeholder="Notification Title"
                        defaultValue={title}
                    />
                </div>
                <div className="flex gap-6">
                    <div className="flex flex-col gap-2 grow rounded shadow-md py-6">
                        {tabs.map(({ label }, index) => <button className={`py-2 px-4 text-left ${activeTab === index && 'border-l-4'}`} key={index} type="button">{label}</button>)}
                    </div>
                    <div className="flex gap-4">
                        <Content notification={notification || {}}/>
                    </div>
                </div>
            </div>
        </Form>
    );
}

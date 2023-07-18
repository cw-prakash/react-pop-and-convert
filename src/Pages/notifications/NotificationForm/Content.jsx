export default function Content({ notification }) {
    const { leadTitle:title, description, type, layout } = notification
    return <>
        <div className="p-5 rounded gap-8 flex flex-col" style={{ width: '888px' }}>
            <div className="flex gap-8">
                <label style={{ width: '280px' }}>Type</label>
                <div className="flex gap-2">
                    <label htmlFor="notificationTypeSticky">
                        Sticky
                        <input type="radio" defaultChecked={'Sticky' === type} name="type" id="notificationTypeSticky" value="Sticky" />
                    </label>
                    <label htmlFor="notificationTypePopup">
                        Popup
                        <input type="radio" defaultChecked={'Popup' === type} name="type" id="notificationTypePopup" value="Popup" />
                    </label>
                </div>
            </div>
            <div className="flex gap-8">
                <label style={{ width: '280px' }}>Layout</label>
                <div className="flex gap-2">
                    <label htmlFor="layout-1">
                        Popup layout 1
                        <input defaultChecked={layout === 'layout-1'} type="radio" name="layout" id="layout-1" value="layout-1" />
                    </label>
                    <label htmlFor="layout-2">
                        Popup layout 2
                        <input defaultChecked={layout === 'layout-2'} type="radio" name="layout" id="layout-2" value="layout-2" />
                    </label>
                    <label htmlFor="layout-3">
                        Popup layout 3
                        <input defaultChecked={layout === 'layout-3'} type="radio" name="layout" id="layout-3" value="layout-3" />
                    </label>
                </div>
            </div>
            <div className="flex gap-8">
                <label style={{ width: '280px' }}>Title</label>
                <div className="flex">
                    <input type="text" name="leadTitle" placeholder="Title Here" defaultValue={title}/>
                </div>
            </div>
            <div className="flex gap-8">
                <label style={{ width: '280px' }}>Description</label>
                <div className="flex">
                    <textarea type="text" name="description" placeholder="Description" defaultValue={description} />
                </div>
            </div>
        </div>
    </>
}

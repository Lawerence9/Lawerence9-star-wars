import React, { useEffect, useState } from "react";

export const Contacts = () => {
    const host ="https://playground.4geeks.com/contact/agendas"
    const user ="AlvaroD"
    const [contacts, setContacts] = useState([])
    const [contactName, setContactName] = useState('')
    const [contactCountry, setContactCountry] = useState('')
    const [contactDirection, setContactDirection] = useState('')
    const [contactEmail, setContactEmail] = useState('')


    const getContacts = async () => {
        const uri = `${host}/${user}/contacts`
        const options = {
            method: 'GET'
        }

        const response = await fetch (uri, options)
        if (!response.ok) {
            console.log('Error', response.status, response.statusText
            );
            return
        }
        const data = await response.json()
        setContacts(data.contacts)
    }


    

    useEffect(()=> {
        getContacts()
    },[])


    return (
        <div className="container">
            <h1>Contact list</h1>
            <ul className="list-group">
            {contacts.map((element)=>(
                <li className="list-group-item d-flex align-items-center position-relative w-100">
                    
                    <div className="position-absolute top-0 end-0 mt-2 me-2">
                        <i className="fa-solid fa-pencil mx-2"></i>
                        <i className="fa-solid fa-trash mx-2 "></i>
                    </div>

                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJntjE-wx3gZvAJMG5V2BVbaFW8MWsPOolsw&s" 
                        alt="Nahobino" 
                        className="img-fluid rounded-circle" 
                        style={{ width: "100px", height: "100px", objectFit: "cover" }} 
                    />
                    <div className="ms-3 flex-grow-1">
                        <h5 className="mb-1">{element.name}</h5>
                        <p className="mb-1">
                            <i className="fa-solid fa-location-dot me-2"></i> 
                            <span style={{ fontFamily: "Arial, sans-serif" }}>{element.address}</span>
                        </p>
                        <p className="mb-1">
                            <i className="fa-solid fa-phone me-2"></i> 
                            <span style={{ fontFamily: "Arial, sans-serif" }}>{element.phone}</span>
                        </p>
                        <p className="mb-0">
                            <i className="fa-solid fa-envelope me-2"></i> 
                            <span style={{ fontFamily: "Arial, sans-serif" }}>{element.email}</span>
                        </p>
                    </div>
                </li>))}
            </ul>
        </div>
    );
};

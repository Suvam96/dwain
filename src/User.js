import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import {AiOutlinePlus,AiOutlineDelete} from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom';
import {FiEdit} from "react-icons/fi";
import axios from 'axios';
import { API } from './config';

const Users = () => {
  const history = useHistory();
  
  const [hideDirector, setHideDirector] = React.useState(false);
  const [users, setUsers] = useState([]);

  const actions = (<Link to="/chart"><button >Go to page-2</button></Link>);

  const columns = React.useMemo(() => [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Email ',
      selector: 'email',
      sortable: true,
    },
    
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
     
    },
    {
      name: 'Website',
      selector: 'website',
      sortable: true,
     
    },

   

  ]);

 
  const getData = async () => {
    axios.get(`${API}/users`).then((response) => {
      console.log('usersresponse', response);
      const data = response.data;
      console.log('data', data);
      setUsers(data);
    });
  };

  


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className='user__data'>
        <DataTable
        title="Users"
          columns={columns}
          data={users}
          selectableRows
          pagination
          persistTableHead
          highlightOnHover
          actions={actions}
          // expandableRows
        />
      </main>
    </>
  );
};

export default Users;
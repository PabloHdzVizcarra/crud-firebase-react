import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {
  const { currentUser, updateUser } = props;

  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: currentUser
  });

  setValue('name', currentUser.name);
  setValue('username', currentUser.username);

  const onSubmit = (data, e) => {
    updateUser(currentUser.id, data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: {
            value: true,
            message: 'Campo requerido'
          }
        })}
      />
      <div>
        {errors?.name?.message}
      </div>
      <label>UserName</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: {
            value: true,
            message: 'Campo requerido'
          }
        })}
      />
      <div>
        {errors?.username?.message}
      </div>
      <button>Edit User</button>
    </form>
  )
}

export default EditUserForm

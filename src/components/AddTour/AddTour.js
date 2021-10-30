import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddTour = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    
    const onSubmit = data => 
    {   
         console.log(data);
        axios.post('http://localhost:5000/tourCollection', data)
        .then(function(res) {
          alert('Tour added successfully');
          reset();
        })
        
       
    }
    return (
        <div className="text-center">
            <h1>Add a tour</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className='reg' placeholder="Tour Name"  {...register("name", { required: true})}/> <br/>
              
              {errors.name?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>
              <input className='reg' placeholder="Price"  {...register("price", { required: true})} /> <br/>
              {errors.price?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>
              <input className='reg' placeholder="Destination" {...register("destination", { required: true})} /> <br/>
              {errors.destination?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>
              <input className='reg' placeholder="Duration" {...register("duration", { required: true})} /> <br/>
              {errors.duration?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>

              <input className='reg' placeholder="Starting Date" {...register("dateStart", { required: true})} /> <br/>
              {errors.dateStart?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>

              <input className='reg' placeholder="Ending Date" {...register("dateEnd", { required: true})} /> <br/>
              {errors.dateEnd?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>

              <input className='reg' placeholder="Description of the trip" {...register("description", { required: true})} /> <br/>
              {errors.description?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>

              <input className='reg' placeholder="Image URL" {...register("img", { required: true})} /> <br/>
              {errors.img?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>
              <input className='reg' placeholder="Rating" {...register("rating", { required: true})} /> <br/>
              {errors.rating?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>

              <input className='reg' placeholder="Number of persons" {...register("size", { required: true})} /> <br/>
              {errors.size?.type === 'required' && <small className='text-danger'>Field required</small> }<br/>
             
             
              <button className='button p-2' type="submit">Add Tour</button>
              </form>
        </div>
    );
};

export default AddTour;
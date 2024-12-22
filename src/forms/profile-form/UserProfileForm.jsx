
// import { z } from "zod"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod";
// import {Form,FormDescription,FormField,FormControl,FormLabel,FormItem,FormMessage,} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//     emial: z.optional(),
//     name: z.string().min(1, "name is required"),
//     university: z.string().min(1, "university is required"),
//     age: z.string().min(1,"age is required"),
//     phone: z.string().min(10,"phone no. is required"),
//     alternatePhone: z.string().min(10,"phone no. is required"),
//     alternateEmail: z.string().min(1,"email is required"),
// });

// type userFormData = z.infer<typeof formSchema>;

// type Props = {
//     onSave: (userProfileData: userFormData) => void;
//     isLoading: Boolean;
// };

// const UserProfileForm = ({onSave , isLoading} : Props) => {
//     const form = useForm<UserFormData>({
//         resolver: zodResolver(formSchema),
//     });

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSave)} className="space-y-4 bg-gray-50 rounded-lg md:p-10">
//                  <div>
//                     <h2 className="text-2xl font-bold"> User Profile Form</h2>
//                     <FormDescription>
//                         View and change your profile here
//                     </FormDescription>
//                  </div>
//                  <FormField control={form.control} name="email" render={({field})=>(
//                     <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                             <Input {...field} disabled className="bg-white" />
//                         </FormControl>
//                     </FormItem>
//                    )}
//                  />
                 
//                  <div className="flex flex-col md:flex-row gap-4">
//                     <FormField control={form.control} name="university" render={({field})=>(
//                         <FormItem>
//                             <FormLabel>University</FormLabel>
//                             <FormControl>
//                                 <Input {...field} disabled className="bg-white" />
//                             </FormControl>
//                         </FormItem>
//                     )}
//                     />
//                     <FormField control={form.control} name="age" render={({field})=>(
//                         <FormItem>
//                             <FormLabel>Age</FormLabel>
//                             <FormControl>
//                                 <Input {...field} disabled className="bg-white" />
//                             </FormControl>
//                         </FormItem>
//                     )}
//                     />
//                     <FormField control={form.control} name="phone" render={({field})=>(
//                         <FormItem>
//                             <FormLabel>Phone</FormLabel>
//                             <FormControl>
//                                 <Input {...field} disabled className="bg-white" />
//                             </FormControl>
//                         </FormItem>
//                     )}
//                     />
//                  </div>
//                  <div className="flex flex-col md:flex-row gap-4">
//                     <FormField control={form.control} name="alternatePhone" render={({field})=>(
//                             <FormItem>
//                                 <FormLabel>Alternate-Phone</FormLabel>
//                                 <FormControl>
//                                     <Input {...field} disabled className="bg-white" />
//                                 </FormControl>
//                             </FormItem>
//                         )}
//                     />
//                     <FormField control={form.control} name="alternateEmail" render={({field})=>(
//                             <FormItem>
//                                 <FormLabel>Alternate-Email</FormLabel>
//                                 <FormControl>
//                                     <Input {...field} disabled className="bg-white" />
//                                 </FormControl>
//                             </FormItem>
//                         )}
//                     />
//                  </div>
//             </form>
//         </Form>
//     )
// };

// export default UserProfileForm;


import React,{ useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "./UserProfileForm-model.css";

const UserProfileForm = ({ currentUser,onSave, isLoading }) => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    defaultValues: currentUser,
  });

//   console.log("User Profile Form Current User: ", currentUser);

  useEffect(() => {
    if(currentUser)
    reset(currentUser);
  }, [currentUser, reset]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSave)}>
        <div>
          <h2 className="form-heading">User Profile Form</h2>
          <p className="form-description">View and change your profile here</p>
        </div>
        
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            {...register('email')}
            className="bg-white border rounded p-2 w-full"
            disabled
          />
        </div>

        <div className="form-row">
        <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="bg-white border rounded p-2 w-full"
            />
            {errors.university && <p className="error-message">{errors.university.message}</p>}
          </div>

          <div className="form-field">
            <label>University</label>
            <input
              type="text"
              {...register('university', { required: 'University is required' })}
              className="bg-white border rounded p-2 w-full"
            />
            {errors.university && <p className="error-message">{errors.university.message}</p>}
          </div>
          
          <div className="form-field">
            <label>Age</label>
            <input
              type="text"
              {...register('age', { required: 'Age is required' })}
              className="bg-white border rounded p-2 w-full"
            />
            {errors.age && <p className="error-message">{errors.age.message}</p>}
          </div>
          
          <div className="form-field">
            <label>Phone</label>
            <input
              type="text"
              {...register('phone', { required: 'Phone number is required', minLength: { value: 10, message: 'Phone number must be at least 10 characters' } })}
              className="bg-white border rounded p-2 w-full"
            />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Alternate Phone</label>
            <input
              type="text"
              {...register('alternatePhone', { required: 'Alternate phone number is required', minLength: { value: 10, message: 'Alternate phone number must be at least 10 characters' } })}
              className="bg-white border rounded p-2 w-full"
            />
            {errors.alternatePhone && <p className="error-message">{errors.alternatePhone.message}</p>}
          </div>
          
          <div className="form-field">
            <label>Alternate Email</label>
            <input
              type="email"
              {...register('alternateEmail', { required: 'Alternate email is required' })}
              className="bg-white border rounded p-2 w-full"
            />
            {errors.alternateEmail && <p className="error-message">{errors.alternateEmail.message}</p>}
          </div>
        </div>
        
        {isLoading? (
            <button
                type="submit"
                className="submit-button"
                disabled
            >
            Loading
            </button>):(
                <button
                type="submit"
                className="submit-button"
            >
            Save
            </button>
            )
        }
        
      </form>
    </div>
  );
};

export default UserProfileForm;



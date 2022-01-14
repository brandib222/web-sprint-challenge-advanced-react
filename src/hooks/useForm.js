// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {
    const [state, setState] = useState(initialValue);
    return [state, setState];
}

export default useForm;
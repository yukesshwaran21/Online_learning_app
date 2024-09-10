import { useEffect, useState } from "react";

const useTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data.results))
    }, [])
    return [teachers];
};

export default useTeachers;
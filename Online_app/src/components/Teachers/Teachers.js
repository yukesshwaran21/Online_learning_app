import React from 'react';
import { Row } from 'react-bootstrap';
import useTeachers from '../../hook/useTeachers';
import TeacherCard from '../TeacherCard/TeacherCard';

const Teachers = () => {
    const [teachers] = useTeachers();
    return (
        <div
            style={{
                backgroundColor: '#f8f9fa', 
                padding: '30px 15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                margin: '20px auto',
                maxWidth: '1200px'
            }}
        >
            <h1
                style={{
                    fontSize: '2.5rem',
                    color: '#343a40',
                    marginBottom: '20px',
                    fontWeight: '700'
                }}
            >
                Meet Our Teachers
            </h1>
            {
                teachers.length ? (
                    <Row
                        xs={1}
                        md={2}
                        lg={4}
                        className="g-4"
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {
                            teachers.map(teacher => (
                                <TeacherCard key={teacher.id.value} teacher={teacher} />
                            ))
                        }
                    </Row>
                ) : (
                    <p style={{ color: '#6c757d' }}>Loading teachers...</p>
                )
            }
        </div>
    );
};

export default Teachers;

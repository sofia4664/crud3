import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const { id } = useParams(); // Corrección aquí

    const update = async (e) => {
        e.preventDefault();
        await axios.put(URI + id, {
            title: title,
            content: content
        });
        navigate('/');
    }

    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () => {
        try {
            const res = await axios.get(URI + id);
            setTitle(res.data[0].title);
            setContent(res.data[0].content);
        } catch (error) {
            console.error("Error al obtener el blog por ID:", error);
        }
    }

    return (
        <div>
            <h3>Editar</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )
}

export default CompEditBlog;

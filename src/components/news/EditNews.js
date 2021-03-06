import {useState} from "react";
import { Input, Form, Typography, Button } from 'antd';

function EditNews(props) {

    const [title, setTitle] = useState(props.noticia.title);
    const [description, setDescription] = useState(props.noticia.description);
    const [text, setText] = useState(props.noticia.text);
    const [author, setAuthor] = useState(props.noticia.author);
    const [createdAt, setCreatedAt] = useState(props.noticia.createdAt);
    const [relatedMovies, setRelatedMovies] = useState(props.noticia.relatedMovies);
    const [urlImagen, setUrlImagen] = useState(props.noticia.urlImagen);
    const [id, setId] = useState(props.noticia._id)

    const { Title } = Typography;

    function onClick() {
        const editNews ={
            title: title,
            description: description,
            text: text,
            author: author,
            createdAt: createdAt,
            relatedMovies: relatedMovies,
            urlImagen: urlImagen,
        };
        const result = props.onNewsEdit(editNews);
        

        if (result) {
            setTitle('');
            setDescription('');
            setText('');
            setAuthor('Autor de EJEMPLO');
            setCreatedAt('Fecha de creación de EJEMPLO');
            setRelatedMovies('');
            setUrlImagen('');
        }

        props.onNewsEdit(editNews);
    }
//            <input className="form-control" name="description" value={description}  onChange={(event) => setDescription(event.target.value)}/>
    return (
        <div>
            <br/><br/><br/>
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Title level={3}
                    layout="horizontal">Editando noticia </Title>
                <Form.Item
                    name="title"
                    label="Título"
                    initialValue={title} 
                    rules={[
                        { required: true , message:'El título no puede estar vacío' }
                        ,{ type: 'string', min: 4 , message:'El título debe tener al menos 4 caracteres.'}
                ]}
                >
                    <Input 
                    placeholder="Título de la noticia" 
                    className="form-control" 
                    name="title" 
                    value={title}  
                    //defaultValues={title}
                    onChange={(event) => setTitle(event.target.value)} 
                    style={{ width: '60%' }}/>
                </Form.Item>
                
                <Form.Item
                    name="description"
                    label = "Subtítulo"
                    initialValue={description} 
                    rules={[
                        { required: true , message:'El subtítulo no puede estar vacío'  },
                        { type: 'string', min: 4 , message:'El subtítulo debe tener al menos 4 caracteres.'}
                    
                    ]}
                >
                    <Input.TextArea 
                    placeholder="Subtítulo de la noticia" 
                    name="description" 
                    value={description} 
                    // initialValues={description} 
                    allowClear 
                    onChange={(event) => setDescription(event.target.value)} 
                    style={{ width: '60%' }} />
                </Form.Item>
                
                <Form.Item
                    name="text"
                    label = "Cuerpo de la noticia"
                    initialValue={text} 
                    rules={[
                        { required: true , message:'El cuerpo no puede estar vacío' },
                        { type: 'string', min: 50 , message:'El cuerpo debe tener al menos 50 caracteres.'}
                ]}
                >
                    <Input.TextArea 
                    placeholder="Cuerpo de la noticia" 
                    name="text" 
                    value={text} 
                    // initialValues={text} 
                    allowClear 
                    onChange={(event) => setText(event.target.value)} 
                    style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    name="urlImagen"
                    label = "Enlace de la imagen"
//                    rules={[{ required: true }]} 
                    initialValue={urlImagen}            
                >
                    <Input type="url" 
                    placeholder="http://www.imagen.com/id1" 
                    name="urlImagen" 
                    value={urlImagen} 
                    // defaultValue={urlImagen} 
                    allowClear 
                    onChange={(event) => setUrlImagen(event.target.value)} 
                    style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    name="_id"
                    hidden
                    initialValue={id}
                >
                    <Input value={id} />

                </Form.Item>

                <Button type="primary" onClick={onClick}> Editar noticia </Button>
            </Form>
        </div>
    )
}

export default EditNews;
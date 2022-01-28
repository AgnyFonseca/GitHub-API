import axios from 'axios';
import { useState } from 'react';
import ResultCard from '../../components/ResultCard/ResultCard';
import './GithubSearch.css';

type FormData = {
    user: string;
}

type GithubProfile = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string;
    name: string;
}



const GithubSearch = () => {
    const [githubProfile, setGithubProfile] = useState<GithubProfile>();

    const [formData, setFormData] = useState<FormData>({
        user: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.user}`)
            .then((response) => {
                setGithubProfile(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                setGithubProfile(undefined);
            });
        setFormData({user: ''});    
    }


    return (
        <div className="github-search-container">
            <div className="search-container">
                <h1>Encontre um perfil GitHub</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input
                            type="text"
                            name="user"
                            value={formData.user}
                            placeholder="Usuário GitHub"
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-primary btn-lg start-button">Encontrar</button>
                    </div>
                </form>
            </div>

            {githubProfile &&
                <div className="search-result-container">
                    <div className="search-result-image">
                        <img src={githubProfile?.avatar_url} alt="" />
                    </div>
                    <div className="search-result-infos">
                        <h3>Informações</h3>
                        <ResultCard title="Perfil:" description={githubProfile?.url} />
                        <ResultCard title="Seguidores:" description={githubProfile?.followers} />
                        <ResultCard title="Localidade:" description={githubProfile?.location} />
                        <ResultCard title="Nome:" description={githubProfile?.name} />
                    </div>
                </div>
            }
        </div>
    );

}

export default GithubSearch;
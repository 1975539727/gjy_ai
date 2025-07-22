import axios from  './config';

export const getRepo = async (username,repoName) => {
    return await axios.get(`/repos/${username}/${repoName}`)
}
export const getRepoList = async (username) => {
    return await axios.get(`/users/${username}/repos`)
}
// components/FetchRepos.js

import axios from 'axios';

const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
});

export const getUserRepositories = async (username) => {
    try {
        const response = await githubAPI.get(`/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        throw error;
    }
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAlbumsService, getUserPostsService, getUsersService } from '../../services/api';

export const getUsersThunk = createAsyncThunk('users/getUsers', () => getUsersService());
export const getUserPostsThunk = createAsyncThunk('users/getUserPosts', (userId) => getUserPostsService(userId));
export const getUserAlbumsThunk = createAsyncThunk('users/getUserAlbums', (userId) => getUserAlbumsService(userId));

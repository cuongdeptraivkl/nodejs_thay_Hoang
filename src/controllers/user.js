import dotenv from 'dotenv';
import axios from 'axios';
import Joi from 'joi';
dotenv.config();


// const userSchema = joi.object({
//     name: Joi.string().required(),
//     username: Joi.number().required(),
//     email: Joi.string().required,
//     phone:Joi.string().required
// });



export const getAll = async (req, res) => {
    try {
        const { data: users } = await axios.get(`http://localhost:3000/users`);
        console.log(users);
        if (users.length === 0) {
            return res.status(404).json({
                message: "Không có ai cả",
            });
        }
        return res.json({
            message: "Lấy danh sách người dùng thành công",
            users,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};



export const get = async (req, res) => {
    try {
        const { data: user } = await axios.get(
            `http://localhost:3000/users/${req.params.id}`
        );
        if (!user) {
            return res.json({
                message: "Không tìm thấy người dùng",
            });
        }
        return res.json({
            message: "Lấy user thầnh công",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const create = async (req, res) => {
    try {
        // validate
        // const { error } = userSchema.validate(req.body);
        // if (error) {
        //     return res.status(400).json({
        //         message: error.details[0].message,
        //     });
        // }
        const { data: user } = await axios.post(`http://localhost:3000/users`, req.body);
        if (!user) {
            return res.json({
                message: "Thêm user không thành công",
            });
        }
        return res.json({
            message: "Thêm user thành công",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};


export const update = async (req, res) => {
    try {
        const { data: user } = await axios.put(
            `http://localhost:3000/users/${req.params.id}`
        );
        if (!user) {
            return res.json({
                message: "update user không thành công",
            });
        }
        return res.json({
            message: "update user thành công",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const { data: user } = await axios.delete(
            `http://localhost:3000/users/${req.params.id}`
        );
        if (!user) {
            return res.json({
                message: "Xóa sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Xóa sản phẩm thành công",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
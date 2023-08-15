const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
    async deleteById(req, res) {
        const { id } = req.params;

        try {
            const deletedTypeCount = await Type.destroy({
                where: {
                    id: id
                }
            });

            if (deletedTypeCount === 0) {
                throw new ApiError(404, 'Type not found');
            }

            return res.json({ message: 'Type deleted successfully' });
        } catch (error) {
            return res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
        }
    }
}

module.exports = new TypeController()
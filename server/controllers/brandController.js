const {Brand} = require('../models/models')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const type = await Brand.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Brand.findAll()
        return res.json(types)
    }
    async deleteById(req, res) {
        const { id } = req.params;

        try {
            const deletedTypeCount = await Brand.destroy({
                where: {
                    id: id
                }
            });

            if (deletedTypeCount === 0) {
                throw new ApiError(404, 'Brand not found');
            }

            return res.json({ message: 'Brand deleted successfully' });
        } catch (error) {
            return res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
        }
    }
}

module.exports = new BrandController()
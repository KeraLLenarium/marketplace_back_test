import SellerAdminService from '../services/sellerAdmin';


export default {
    async getAllBuyerAdmins(req, res) {
        try {
            const buyerAdmins = await SellerAdminService.getAllBuyerAdmins();
            res.status(200).json(buyerAdmins);
        } catch (error) {
            console.error('Failed to retrieve buyer admins:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async getBuyerAdminById(req, res) {
        try {
            const { id } = req.params;
            const buyerAdmin = await SellerAdminService.getBuyerAdminById(id);
            if (!buyerAdmin) {
                return res.status(404).json({ error: 'Buyer admin not found' });
            }
            res.status(200).json(buyerAdmin);
        } catch (error) {
            console.error('Failed to retrieve buyer admin:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async createBuyerAdmin(req, res) {
        try {
            const newBuyerAdmin = await SellerAdminService.createBuyerAdmin(req.body);
            res.status(201).json(newBuyerAdmin);
        } catch (error) {
            console.error('Failed to create buyer admin:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async updateBuyerAdmin(req, res) {
        try {
            const { id } = req.params;
            const updatedBuyerAdmin = await SellerAdminService.updateBuyerAdmin(id, req.body);
            if (!updatedBuyerAdmin) {
                return res.status(404).json({ error: 'Buyer admin not found' });
            }
            res.status(200).json(updatedBuyerAdmin);
        } catch (error) {
            console.error('Failed to update buyer admin:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async deleteBuyerAdmin(req, res) {
        try {
            const { id } = req.params;
            const deleteResult = await SellerAdminService.deleteBuyerAdmin(id);
            if (!deleteResult) {
                return res.status(404).json({ error: 'Buyer admin not found' });
            }
            res.status(200).json({ message: 'Buyer admin deleted successfully' });
        } catch (error) {
            console.error('Failed to delete buyer admin:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

const express = require('express'); 
const router = express.Router(); 

const { requireAuth } = require('../../utils/auth'); 
const { User, Spot, SpotImage, Review, ReviewImage, Booking, sequelize } = require('../../db/models'); 



/* ----------------------------- ReviewImages ------------------------------ */

// delete a Review image 
router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const reviewImage = await ReviewImage.findByPk(req.params.imageId);
    if (reviewImage) {
        const review = await Review.findByPk(reviewImage.reviewId);
        if (req.user.id === review.userId) {
            await reviewImage.destroy();
            res.json({
                message: "Successfully deleted",
                statusCode: 200
            });
        } else res.status(403).json({
            message: "Forbidden",
            statusCode: 403
        });
    } else res.status(404).json({
        message: "Review Image couldn't be found",
        statusCode: 404
    });
});







module.exports = router; 
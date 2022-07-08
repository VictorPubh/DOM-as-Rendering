const app = require('../app')
const request = require('supertest')
const { getImagemAssetsAvailable } = require('../../common/utils')

describe('Common > Utils', () => {
  it('should return list of dir', async () => {
    // const response = await request(app).post('/nonexistent-endpoint');

    const dirAvailable = getImagemAssetsAvailableSize()
    expect(dirAvailable).toBeGreaterThan(0)
  })
})
import { afterEach, beforeEach, vi } from "vitest"
import { render, screen } from "../utils/test-utils"
import Async from "./Async"

describe('Async component', () => {

  beforeEach(() => {
    render(<Async/>)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test.concurrent('renders posts sucessfully', async () => {
    window.fetch = vi.fn().mockResolvedValueOnce({
      JSON: async () => [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },]
    })
    

    const postItems = await screen.findAllByRole('listitem')
    expect(postItems).not.toHaveLength(0)
  })


})
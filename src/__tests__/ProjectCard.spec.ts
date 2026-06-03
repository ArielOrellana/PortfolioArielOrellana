import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../components/ProjectCard.vue'

describe('ProjectCard', () => {
  const mockCard = {
    id: 1,
    img: '/portfolio/test.png',
    titulo: 'Test Project',
    descripcion: 'A test project description',
    repo: 'https://github.com/test/repo',
    sitio: 'https://example.com',
  }

  it('renders card title', () => {
    const wrapper = mount(ProjectCard, {
      props: { card: mockCard },
    })
    expect(wrapper.text()).toContain('Test Project')
  })

  it('renders description', () => {
    const wrapper = mount(ProjectCard, {
      props: { card: mockCard },
    })
    expect(wrapper.text()).toContain('A test project description')
  })

  it('renders action links', () => {
    const wrapper = mount(ProjectCard, {
      props: { card: mockCard },
    })
    expect(wrapper.find('a[href="https://github.com/test/repo"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://example.com"]').exists()).toBe(true)
  })
})

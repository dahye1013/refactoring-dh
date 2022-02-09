class ResourcePool<T extends Resource> {
  private available: T[] = [];
  private allocated: T[] = [];

  get() {
    let result;
    try {
      result = this.available.pop();
      this.allocated.push(result);
    } catch (e) {
      result = Resource.create();
      this.allocated.push(result);
    }
    return result;
  }
}

class Resource {
  static create() {
    return new Resource();
  }
}

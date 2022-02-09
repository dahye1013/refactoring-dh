class ResourcePool<T extends Resource> {
  private available: T[] = [];
  private allocated: T[] = [];

  get() {
    let result;
    if (this.isEmpty) {
      result = Resource.create();
      this.allocated.push(result);
    } else {
      try {
        result = this.available.pop();
        this.allocated.push(result);
      } catch (e) {}
    }
    return result;
  }

  isEmpty() {
    this.available.length === 0;
  }
}

class Resource {
  static create() {
    return new Resource();
  }
}

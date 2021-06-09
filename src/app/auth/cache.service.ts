export abstract class CacheService
{
  protected getItem<T> (key: string): T | null
  {
    const data = localStorage.getItem(key);
    if (data != null)
      return JSON.parse(data)
    else
      return null
  }

  protected setItem (key: string, data: object | string)
  {
    if (typeof data === 'string')
      localStorage.setItem(key, data)
    else
      localStorage.setItem(key, JSON.stringify(data));
  }

  protected removeItem (key: string)
  {
    localStorage.removeItem(key);
  }

  protected clear ()
  {
    localStorage.clear();
  }
}
